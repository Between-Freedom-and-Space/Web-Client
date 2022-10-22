import React, {ReactNode} from "react";

type Props = { children?: ReactNode }

function GeneralContentHolder({children}: Props) {
  return (
    <main>
      {children}
    </main>
  );
}

export default GeneralContentHolder;
