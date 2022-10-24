import "./css/Button.css";

type Props = {
  children: string;
  variant?: "signIn" | "signUp" | "signOut" | "search";
};

export function Buttons({ children, variant, ...rest }: Props) {
  let style: any = {
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    margin: "0.5rem",
    cursor: "pointer",
  };

  if (variant === "signIn") {
    style.backgroundColor =
      "radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%)";
  }

  if (variant === "signUp") {
    style.backgroundColor = "#00008b";
    style.paddingBottom = "0.7rem";
    style.paddingTop = "0.7rem";
  }

  if (variant === "signOut") {
    style.backgroundColor = "#00008b";
    style.paddingBottom = "0.7rem";
    style.paddingTop = "0.7rem";
  }

  if (variant === "search") {
    style.backgroundColor = "#00008b";
    style.padding = "0.2rem";
    style.borderRadius = "50px";
    style.width = "100px";
    style.justifySelf = "center";
  }

  return (
    <button className="button" style={style} {...rest}>
      {children}
    </button>
  );
}
