import "./components/style.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemContent,
} from "./components/Accordion";

export default function App() {
  return (
    <main>
      <Accordion>
        <AccordionItem>
          <AccordionItemTitle title="Title 1" />
          <AccordionItemContent>
            <div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
            </div>
          </AccordionItemContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemTitle title="Title 1" />
          <AccordionItemContent>
            <div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
              <div>content</div>
            </div>
          </AccordionItemContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
