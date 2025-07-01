import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // ← Fixed import path

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        value="item-1"
        className="space-y-4 rounded-xl p-6 transition-colors duration-200 data-[state=open]:bg-gray-100"
      >
        <AccordionTrigger className="text-xl font-bold">
          How do I share feedback?
        </AccordionTrigger>
        <AccordionContent>
          We make giving feedback simple and flexible. Most of our design work
          happens in Figma, an online design tool where you can click right on
          the design and leave comments. It keeps everything organized in one
          place.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-2"
        className="rounded-xl p-6 transition-colors duration-200 data-[state=open]:bg-gray-100"
      >
        <AccordionTrigger className="text-xl font-bold">
          What if it’s not quite what I imagined?
        </AccordionTrigger>
        <AccordionContent>
          No stress. We'll iterate. Taste is subjective, and we’ve worked with
          enough teams to know how to bridge gaps. If something doesn’t hit
          right away, we’ll refine it together until it does.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-3"
        className="rounded-xl p-6 transition-colors duration-200 data-[state=open]:bg-gray-100"
      >
        <AccordionTrigger className="text-xl font-bold">
          What's your process?
        </AccordionTrigger>
        <AccordionContent>
          We start with a deep dive to understand your goals, then map a design
          plan with weekly milestones. You’ll get regular updates and quick
          replies so that you’re always in the loop without needing to
          micromanage.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-4"
        className="rounded-xl p-6 transition-colors duration-200 data-[state=open]:bg-gray-100"
      >
        <AccordionTrigger className="text-xl font-bold">
          Can we hop on calls?
        </AccordionTrigger>
        <AccordionContent>
          Of course! Every project starts with a strategy call to plan things
          out together. After that, we mostly share updates by messages in our
          Slack channel so we don’t take up too much of your time. But if we
          ever need to talk things through, you can easily book a call with us
          anytime.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
