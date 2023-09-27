import React from "react";

interface UserBioItemProps {
  fieldName: string;
  fieldValue: string;
}

export const UserBioItem = ({ fieldName, fieldValue }: UserBioItemProps) => {
  return (
    <div className="userInfo">
      <p className="secondaryText info">{fieldName}:</p>
      <p className="value">{fieldValue}</p>
    </div>
  );
};
