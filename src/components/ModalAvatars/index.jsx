import { Wrapper, Content } from "./styles";
import { useAvatars } from "../../providers/Avatars";
import Avatar from "react-nice-avatar";
import { useUser } from "../../providers/User";

const ModalAvatars = ({ isOpen, onClose }) => {
  const { avatars } = useAvatars();
  const { updateAvatarIcon } = useUser();
  return (
    <Wrapper isOpen={isOpen} onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>X</button>
        <ul>
          {avatars.map((avatar) => (
            <li
              key={avatar.avatarId}
              onClick={() => {
                updateAvatarIcon({ avatar });
                onClose();
              }}
            >
              <Avatar
                style={{ height: "4rem", width: "4rem" }}
                {...avatar.avatarConfig}
              />
            </li>
          ))}
        </ul>
      </Content>
    </Wrapper>
  );
};

export default ModalAvatars;
