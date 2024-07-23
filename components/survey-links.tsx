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
    website: process.env.NEXT_PUBLIC_LITE_WEBSITE_URL,
    survey: process.env.NEXT_PUBLIC_LITE_SURVEY_URL,
  },
  {
    website: process.env.NEXT_PUBLIC_PRO_WEBSITE_URL,
    survey: process.env.NEXT_PUBLIC_PRO_SURVEY_URL,
  },
];

const SurveyLinks: React.FC<SurveyLinksProps> = ({ group, onComplete }) => {
  let surveyLink = group === "A" ? surveyLinks[0] : surveyLinks[1];

  return (
    <div className="space-y-4">
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
        <li>Try the EmotiPaw Lite version and answer some questions</li>
        <li>Try the EmotiPaw Pro version and answer more questions</li>
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
