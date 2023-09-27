import { AppElem } from "../AppElem/AppElem";
import { userData } from "./ProfileElems.data";
import { SCUserBio } from "./ProfileElems.style";
import { mapUserDataFields } from "./../../utils/mapUserDataFields";
import { UserBioItem } from "./UserBioItem";

interface IUserBioProps {}

export const UserBio = ({}: IUserBioProps) => {
  const fields = mapUserDataFields();

  return (
    <SCUserBio>
      <AppElem
        elemName={`${userData.name} ${userData.surname}`}
        elemImg={userData.img}
        elemStatus={userData.status}
      />
      <div className="userBio">
        {fields.map((field) => (
          <UserBioItem
            key={field.fieldName}
            fieldName={field.fieldName}
            fieldValue={field.fieldValue}
          />
        ))}
      </div>
    </SCUserBio>
  );
};
