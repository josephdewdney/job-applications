import React, { useEffect, useRef, useState } from "react";

export const Pages = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMeasured, setIsMeasured] = useState(false);
  const [paginatedChildren, setPaginatedChildren] = useState<string[][]>(
    []
  );

  useEffect(() => {
    if (!ref.current) return;
    const style = window.getComputedStyle(ref.current);
    const paddingTop = parseFloat(style.paddingTop);
    const paddingBottom = parseFloat(style.paddingBottom);
    const pageHeight = ref.current.offsetHeight - paddingTop - paddingBottom;
    const childrenElements = Array.from(ref.current.children);
    let pages: string[][] = [];
    let currentPage: string[] = [];
    pages.push(currentPage);

    for (let i = 0; i < childrenElements.length; i++) {
      const child = childrenElements[i] as HTMLElement;
      if (child.offsetTop + child.offsetHeight > pages.length * pageHeight) {
        currentPage = [];
        pages.push(currentPage);
      }
      currentPage.push(child.outerHTML);
    }

    setPaginatedChildren(pages);
    setIsMeasured(true);
  }, [children]);

  if (isMeasured) {
    return (
      <div>
        {paginatedChildren.map((children, i) => {
          return (
            <div
              className="bg-white p-12 size-a4 mx-auto rounded space-y-6"
              key={i}
              dangerouslySetInnerHTML={{
                __html: children.join(""),
              }}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="bg-white p-12  size-a4 mx-auto" ref={ref}>
      {children}
    </div>
  );
};
