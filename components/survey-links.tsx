interface SurveyLinksProps {
  group: string;
  onComplete: () => void;
}

type SurveyLink = {
  website: string;
  survey: string;
  explanation: string;
};

const surveyLinks = [
  {
    website: process.env.NEXT_PUBLIC_GROUP_A_WEBSITE_URL,
    survey: process.env.NEXT_PUBLIC_GROUP_A_SURVEY_URL,
  },
  {
    website: process.env.NEXT_PUBLIC_GROUP_B_WEBSITE_URL,
    survey: process.env.NEXT_PUBLIC_GROUP_B_SURVEY_URL,
  },
];

const SurveyLinks: React.FC<SurveyLinksProps> = ({ group, onComplete }) => {
  let surveyLink = group === "A" ? surveyLinks[0] : surveyLinks[1];

  return (
    <div className="space-y-4">
      {/* <h1 className="text-xl font-bold mb-4">Important Reminder</h1>
      <p className="text-gray-700">
        {`Please keep this tab open until the experiment concludes to ensure
        accurate results. Thank you for your cooperation!`}
      </p>
      <hr></hr> */}
      <h1 className="text-xl font-semibold mb-4">Study Links</h1>
      <p className="text-gray-700">
        Please follow these steps to complete the study:
      </p>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li>
          Explore the EmotiPaw website:{" "}
          <a
            href={surveyLink.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 ml-2"
          >
            EmotiPaw Website
          </a>
        </li>
        <li>
          Complete the survey as you go through all of the remaining steps:{" "}
          <a
            href={surveyLink.survey}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 ml-2"
          >
            Questionnaire
          </a>
        </li>
        <li>
          Try the EmotiPaw Lite version and answer some questions
          <p className="mt-2 text-sm text-gray-600">
            Please upload at least 3 photos when testing
          </p>
        </li>
        <li>
          Try the EmotiPaw Pro version and answer more questions{" "}
          <p className="mt-2 text-sm text-gray-600">
            Please upload at least 3 photos when testing
          </p>
        </li>
        <li>Share your overall thoughts on the technology</li>
      </ol>
      <p className="text-gray-700 mt-4">
        After completing both steps, please click the button below:
      </p>
      <button
        onClick={onComplete}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        I Have Completed the Survey
      </button>
    </div>
  );
};

export default SurveyLinks;
