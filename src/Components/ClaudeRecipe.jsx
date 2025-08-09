import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ClaudeRecipe(props) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Brenda Recommends: </h2>
      <ReactMarkdown children={props.recipe} remarkPlugins={[remarkGfm]} />
    </section>
  );
}

export default ClaudeRecipe;
