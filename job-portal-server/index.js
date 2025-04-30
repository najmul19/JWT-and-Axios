const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:5173"], // access for react frontend url
    credentials: true, // enable cookies from react client
  })
);
app.use(express.json());
app.use(cookieParser());
const logger = (req, res, next) => {
  console.log("inide the logger");
  next();
};
const verifyToken = (req, res, next) => {
  // console.log("inide the verify token midlware", req.cookies);
  const token = req?.cookies?.token;
  if (!token) {
    return res.status(401).send({ message: "Unauthorized Access" }); //unauthorised
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized Access" });
    }
    req.user = decoded;
    next();
  });
};

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zof5niq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    // jobs related apis
    const jobsCollections = client.db("jobPortal").collection("jobs");
    const jobApplicationCollections = client
      .db("jobPortal")
      .collection("job_applications");

    // jobs related apis
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false, // http://localhost:5173/signin
        })
        .send({ success: true });
    });

    //  handle logout to remove token from the cookies
    app.post("/logout", (req, res) => {
      res
        .clearCookie("token", {
          httpOnly: true,
          secure: false, // for local
        })
        .send({ success: true });
    });

    app.get("/jobs", logger, async (req, res) => {
      console.log("now inside the api callback");
      // update for reqruiter
      const email = req.query.email;
      let query = {};
      if (email) {
        query = { hr_email: email };
      }
      const cursor = jobsCollections.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollections.findOne(query);
      res.send(result);
    });
    app.post("/jobs", async (req, res) => {
      const newJob = req.body;
      const result = await jobsCollections.insertOne(newJob);
      res.send(result);
    });

    // job application apis
    app.get("/job-application", verifyToken, async (req, res) => {
      const email = req.query.email;
      const query = { applicant_email: email };
      // console.log("cookies", req.cookies);
      if (req.user.email !== req.query.email) { // token email !== query email
        // ekjoner token diye onno joner ta acces kora theke bachay
        return res.status(403).send({ message: "Forbidden access" });
      }
      const result = await jobApplicationCollections.find(query).toArray();

      // not the best way
      for (const application of result) {
        console.log(application.job_id);
        const query = { _id: new ObjectId(application.job_id) };
        const result = await jobsCollections.findOne(query);
        if (result) {
          application.title = result.title;
          application.company = result.company;
          application.company_logo = result.company_logo;
          application.location = result.location;
        }
      }

      res.send(result);
    });
    app.get("/job-applications/jobs/:job_id", async (req, res) => {
      const jobId = req.params.job_id;
      const query = { job_id: jobId };
      const result = await jobApplicationCollections.find(query).toArray();
      res.send(result);
    });
    app.post("/job-applications", async (req, res) => {
      const application = req.body;
      const result = await jobApplicationCollections.insertOne(application);
      // update for count job
      // not the best way
      const id = application.job_id;
      const query = { _id: new ObjectId(id) };
      const job = await jobsCollections.findOne(query);
      // console.log(job);
      let newCount = 0;
      if (job.applicationCount) {
        newCount = job.applicationCount + 1;
      } else {
        newCount = 1;
      }

      // now update the job info

      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          applicationCount: newCount,
        },
      };

      const updateResult = await jobsCollections.updateOne(filter, updatedDoc);

      res.send(result);
    });
    app.patch("/job-applications/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          status: data.status,
        },
      };
      const result = await jobApplicationCollections.updateOne(
        filter,
        updatedDoc
      );
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("job is falling from the sky");
});

app.listen(port, () => {
  console.log(`job is waiting at : ${port}`);
});
