declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export const MetaData: {
    title: string;
    slug: string;
    tags?: string[];
    date: string;
    description?: string;
  };
  export default MDXComponent;
}
