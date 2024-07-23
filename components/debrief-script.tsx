const contactEmail = "2731698k@student.gla.ac.uk";

const modelVersions = [
  { first: "Lite", second: "Pro" },
  { first: "Pro", second: "Lite" },
];

interface DebriefScriptProps {
  group: string;
}

const DebriefScript: React.FC<DebriefScriptProps> = ({ group }) => {
  let modelVersion = group === "A" ? modelVersions[0] : modelVersions[1];

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold mb-4">Study Debrief</h1>
      <p className="text-gray-700">
        Thank you for participating in our study. Here is a brief overview of
        what we were investigating:
      </p>

      <h3 className="text-lg font-semibold mt-4">Main Aim:</h3>
      <p className="text-gray-700">We wanted to understand:</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>How much do people trust AI to understand pet's emotions?</li>
        <li>Whether people believe AI because it is labelled as "pro."</li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">
        Revelations about the Experimental Design:
      </h3>
      <p className="text-gray-700">
        During this study, you interacted with two versions of a system that
        claimed to use AI for recognizing pet emotions:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          The "{modelVersion.first} version" was entirely fabricated. It
          provided random responses regardless of the uploaded image. This
          deception was intentional in assessing whether users would trust a
          system simply because it was labelled as AI technology.
        </li>
        <li>
          The "{modelVersion.second} version" used GPT-4, a large language
          model. While its responses may have appeared plausible, it is
          important to note that such models can produce inaccurate or
          fabricated information. The emotional assessments were not necessarily
          accurate or based on validated scientific methods for animal emotion
          recognition.
        </li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">Additional Aims:</h3>
      <p className="text-gray-700">We also looked at:</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>How prior AI experience affects trust.</li>
        <li>Impact of AI confidence levels on user perceptions.</li>
        <li>If people trust AI more when it's called "pro".</li>
        <li>How well can people spot unreliable AI information?</li>
      </ul>
      <p className="text-gray-700">
        We collected data on your website interactions, verbal responses, and
        questionnaire answers.
      </p>

      <h3 className="text-lg font-semibold mt-4">Ethical Considerations:</h3>
      <p className="text-gray-700">
        We acknowledge that the use of deception was integral to this study's
        objectives. Our ethics committee approved this approach to ensure
        valuable insights while minimizing potential risks. The deception was
        deemed necessary to authentically assess user trust and critically
        evaluate AI systems.
      </p>

      <h3 className="text-lg font-semibold mt-4">Feedback and Contact:</h3>
      <p className="text-gray-700">
        Given this complete disclosure of the study's purpose and design, we
        welcome any thoughts or insights you may have.
      </p>
      <p className="text-gray-700">
        For any future questions or comments, or if you wish to withdraw your
        data, please contact:
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
      <p className="text-gray-700 mt-4">
        Thank you again for your time and valuable input to our research on AI
        in animal care.
      </p>
    </div>
  );
};

export default DebriefScript;
