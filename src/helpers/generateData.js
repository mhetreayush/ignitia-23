import testData from "@/../testData.json";
export const generateData = async (phrase, setData, type) => {
  let toGenerate = "";
  const setType = (type) => {
    switch (type) {
      case "PS":
        toGenerate = `Generate a problem statement for the phrase '${phrase}' max 90 words.`;
        break;
      case "MR":
        toGenerate = `Generate a market research for the product according to phrase '${phrase}' max 90 words.`;
        break;
      case "PR":
        toGenerate = `Generate a questionnaire of 10 questions for form to circulate to the public and get their opinions with options about product about phrase '${phrase}'`;
        break;
      case "SR":
        toGenerate = `Give research article links about the phrase ${phrase}`;
        break;
      case "UP":
        toGenerate = `Generate a user persona for the phrase '${phrase}'`;
        break;
      case "IM":
        toGenerate = `Generate an implementation for the product according to phrase '${phrase}'`;
        break;
      case "TS":
        toGenerate = `Generate a Tech stack for the product according to phrase '${phrase}'`;
        break;
    }
  };
  setType(type);
  setData(testData[type].choices[0].text);
  // const requestOptions = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization:
  //       "Bearer " +
  //       String(process.env.NEXT_PUBLIC_OPEN_AI_API_KEY),
  //   },
  //   body: JSON.stringify({
  //     prompt: toGenerate,
  //     temperature: 0.1,
  //     max_tokens: 100,
  //     top_p: 1,
  //     frequency_penalty: 0,
  //     presence_penalty: 0.5,
  //     stop: ['"""'],
  //   }),
  // };

  // fetch(
  //   "https://api.openai.com/v1/engines/text-davinci-003/completions",
  //   requestOptions
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // # Do something with data
  //     console.log(data);
  //     setData(data.choices[0].text);
  //   })
  //   .catch((err) => {
  //     console.log("Ran out of tokens for today! Try tomorrow!");
  //   });
};
