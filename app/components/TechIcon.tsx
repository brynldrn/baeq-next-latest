import { SiAngular, SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTypescript, SiWordpress } from "react-icons/si";

export default function TechIcon({ type }: { type: string }) {
  if (type === 'HTML') {
    return <SiHtml5 className="text-theme-blue" />
  }

  if (type === 'CSS') {
    return <SiCss3 className="text-theme-blue" />
  }

  if (type === 'JavaScript') {
    return <SiJavascript className="text-theme-blue" />
  }

  if (type === 'TypeScript') {
    return <SiTypescript className="text-theme-blue" />
  }

  if (type === 'WordPress') {
    return <SiWordpress className="text-theme-blue" />
  }

  if (type === 'NextJS') {
    return <SiNextdotjs className="text-theme-blue" />
  }

  if (type === 'React') {
    return <SiReact className="text-theme-blue" />
  }

  if (type === 'Angular') {
    return <SiAngular className="text-theme-blue" />
  }

  return <SiReact className="text-theme-blue" />
}
