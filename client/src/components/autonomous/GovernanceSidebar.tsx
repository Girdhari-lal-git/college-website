import React from "react";

interface Props {
  bodies: string[];
  active: string;
  onSelect: (body: string) => void;
}

const GovernanceSidebar: React.FC<Props> = ({
  bodies,
  active,
  onSelect,
}) => {
  return (
    <div className="border rounded-lg p-4 space-y-2">
      {bodies.map((body) => (
        <button
          key={body}
          onClick={() => onSelect(body)}
          className={`w-full text-left px-3 py-2 rounded transition ${
            active === body
              ? "bg-primary text-white"
              : "hover:bg-muted"
          }`}
        >
          {body}
        </button>
      ))}
    </div>
  );
};

export default GovernanceSidebar;
