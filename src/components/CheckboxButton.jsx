import React from "react";
import { motion } from "framer-motion";

const CellButton = ({
  value,
  status,
  id,
  label,
  onClick,
  type,
  number,
  onClickIcon
}) => {
  let buttonClass = "btn btn-outline-primary btn-sm";
  if (status === "selected") buttonClass = "btn btn-primary btn-sm";
  else if (status === "inactive")
    buttonClass = "btn btn-outline-secondary btn-sm";
  const list = {
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: (id + 1) * 0.02
      }
    },
    hidden: { opacity: 0, scale: 0 }
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}
      key={value + id}
      className={buttonClass}
      style={{ marginLeft: "3px", marginBottom: "3px", display: "inline-flex" }}
      onClick={event => onClick(type, id)}
      whileTap={{ scale: 0.9 }}
    >
      <span style={{ cursor: "pointer" }}>{label}</span>
      {type === "cell" && (
        <div
          style={{
            color: status !== "selected" ? "#0061AA" : "white",
            background: status === "selected" ? "#0061AA" : "white",
            marginLeft: "3px",
            width: "20px",
            border: "solid 1px",
            borderRadius: "20px"
          }}
        >
          {number}
        </div>
      )}
      {status && (
        <span
          style={{ width: "10px", display: "inline-block", marginLeft: "3px" }}
        >
          <i
            key={id}
            style={{ cursor: "pointer" }}
            className={status === "selected" ? "fa fa-check" : "fa fa-plus"}
          />
        </span>
      )}
    </motion.div>
  );
};

export default CellButton;
