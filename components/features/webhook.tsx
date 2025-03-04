import React, { useState } from "react";
import RoundedCustomCheckbox from "../ui/global/roundedCheckBox";

function Webhook() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <h1 className=" text-grayMain">Create webhook</h1>

      <section>
        <RoundedCustomCheckbox checked={isChecked} onChange={setIsChecked} />
      </section>
    </div>
  );
}

export default Webhook;
