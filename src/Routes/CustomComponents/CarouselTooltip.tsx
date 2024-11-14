import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Npx-Shad-Components/components/tooltip";

export function CarouselHoverItem(props: { children: any; Intext: string }) {
  const { children, Intext } = props;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{Intext}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
