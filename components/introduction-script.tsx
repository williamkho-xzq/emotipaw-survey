interface IntroductionScriptProps {
  onAgree: () => void;
}
const contactEmail = "2731698k@student.gla.ac.uk";

const IntroductionScript: React.FC<IntroductionScriptProps> = ({ onAgree }) => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700">
        {`Welcome to our study on AI's ability to recognize pet's emotions and the
        level of trust users have in AI technology for their animals'
        well-being.`}
      </p>
      <p className="text-gray-700">In this study, you will:</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          {`Use a website that utilizes AI to analyse pet's emotions from their
          photos.`}
        </li>
        <li>
          {`Upload a photo of your pet and review the AI's emotional assessment.`}
        </li>
        <li>Share your thoughts and complete a brief questionnaire.</li>
      </ul>
      <p className="text-gray-700">We are looking for:</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>{`Dog or cat owners`}</li>
        <li>{`16 years age or older`}</li>
      </ul>
      <p className="text-gray-700">
        {`We will be recording your responses. This study is not an assessment of
        your skills; we are specifically interested in your honest reactions and
        opinions. The survey will take approximately 15 minutes to complete.`}
      </p>
      <p className="text-gray-700">
        {`Participation is completely voluntary, and all responses will be kept confidential and used solely for academic research purposes. You are free to leave the study
        at any point. However, if you choose to leave early, we will not be able
        to provide a full explanation of the study's objectives afterwards.`}
      </p>
      <p className="text-gray-700">
        {`This survey has been ethically approved by the University of Glasgow,
        ensuring that all procedures adhere to strict ethical guidelines to
        protect your rights and well-being as a participant.`}
      </p>

      <p className="text-gray-700 font-semibold">
        Do you agree to participate and allow us to collect and analyse the data
        as outlined?
      </p>
      <button
        onClick={onAgree}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        I Agree to Participate
      </button>
      <hr></hr>
      <p className="text-gray-700">
        {`For any future questions or comments, please contact:`}
      </p>
      <div className="flex items-center space-x-4 mt-2">
        <p className="text-gray-700 font-semibold">{contactEmail}</p>
        <a
          href={`mailto:${contactEmail}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
        >
          Send Email
        </a>
      </div>
    </div>
  );
};

export default IntroductionScript;
