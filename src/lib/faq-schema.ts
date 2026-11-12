import { isValidElement, type ReactNode } from "react";

// Read the same answer nodes rendered by the FAQ, including inline link labels.
export function answerText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(answerText).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return answerText(node.props.children);
  return "";
}

export function faqSchema(sections: { items: { q: string; a: ReactNode }[] }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sections.flatMap(({ items }) => items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: answerText(a).replace(/\s+/g, " ").trim() },
    }))),
  };
}