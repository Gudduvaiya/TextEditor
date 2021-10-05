import React from "react";

export default function Alerts(props) {
  return (
    <div>
       <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.alrt.typ}</strong>{props.alrt.msg} 
      </div>
    </div>
  );
}
