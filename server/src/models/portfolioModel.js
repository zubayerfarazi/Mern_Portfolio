const { model, Schema } = require("mongoose");

const introSchema = new Schema(
  {
    profileImage: {
      type: String,
      required: true,
    },
    cv: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
    githubLink: {
      type: String,
      required: true,
    },
    linkedInLink: {
      type: String,
      required: true,
    },
    facebookLink: {
      type: String,
      required: true,
    },
    twitterLink: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const projectInfoSchema = new Schema(
  {
    noOfExperience: {
      type: Number,
      required: true,
    },
    noOfProjectCompleted: {
      type: Number,
      required: true,
    },
    noOfTechnology: {
      type: Number,
      required: true,
    },
    noOfCodeCommits: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);

const contactSchema = new Schema(
  {
    contactDescription: {
      type: String,
      required: true,
    },
    gmail: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    currentLocation: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const serviceSchema = new Schema(
  {
    serviceParagraph: {
      type: String,
      required: true,
    }, // Array of card schemas
  },
  { timestamps: true }
);

const serviceCardSchema = new Schema(
  {
    cardImage: {
      type: String,
      required: true,
    },

    cardHeader: {
      type: String,
      required: true,
    },
    cardParagraph: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const projectSchema = new Schema(
  {
    projectImage: {
      type: String,
      required: true,
    },
    projectNo: {
      type: String,
      required: true,
    },
    projectTitle: {
      type: String,
      required: true,
    },
    projectParagraph: {
      type: String,
      required: true,
    },
    projectLiveLink: {
      type: String,
      required: true,
    },
    projectGithubLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const aboutSchema = new Schema(
  {
    aboutImage: {
      type: String,
      required: true,
    },
    aboutDesignation: {
      type: String,
      required: true,
    },
    aboutParagraph: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userIntro = model("userIntro", introSchema);
const projectInfo = model("projectInfo", projectInfoSchema);
const contactInfo = model("contactInformation", contactSchema);
const serviceInfo = model("serviceInfo", serviceSchema);
const serviceCardInfo = model("serviceCardInfo", serviceCardSchema);
const liveProjectInfo = model("liveProjectInfo", projectSchema);
const aboutInfo = model("aboutInfo", aboutSchema);

module.exports = {
  userIntro,
  projectInfo,
  contactInfo,
  serviceInfo,
  serviceCardInfo,
  liveProjectInfo,
  aboutInfo,
};
