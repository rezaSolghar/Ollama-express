interface ParsedQuestion {
  question: string;
  answers: string[];
}

export function parseGeometryQuestion(response: string): ParsedQuestion {
  const lines = response.split("\n");

  let question = "";
  const answers: string[] = [];

  lines.forEach((line) => {
    if (line.startsWith("Question:")) {
      question = line.replace("Question: ", "").trim();
    } else if (
      line.startsWith("A)") ||
      line.startsWith("(A)") ||
      line.startsWith("A:") ||
      line.startsWith("B)") ||
      line.startsWith("(B)") ||
      line.startsWith("B:") ||
      line.startsWith("C)") ||
      line.startsWith("(C)") ||
      line.startsWith("C:") ||
      line.startsWith("D)") ||
      line.startsWith("(D)") ||
      line.startsWith("D:")
    ) {
      answers.push(line.trim());
    }
  });

  return { question, answers };
}
