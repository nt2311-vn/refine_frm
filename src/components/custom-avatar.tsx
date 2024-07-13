import { Avatar as AntdAvatar } from "antd";

type Props = AvatarProps & {
  name: string;
};
const CustomAvatar = ({ name, style, ...rest }) => {
  return (
    <AntdAvatar
      alt="Avatar"
      size="small"
      style={{
        backgroundColor: "#87d068",
        display: "flex",
        alignItems: "center",
        border: "none",
      }}
    >
      {name}
    </AntdAvatar>
  );
};

export default CustomAvatar;
