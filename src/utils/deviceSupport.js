export default function getDeviceSupport() {
  const responseStyles = {
    full: {
      backgroundColor: "rgba(0, 255, 0, 0.5)",
      color: "rgb(0, 255, 0)"
    },
    partial: {
      backgroundColor: "rgba(255, 166, 0, 0.3)",
      color: "rgb(255, 175, 26)"
    },
    no: {
      backgroundColor: "rgba(255, 0, 0, 0.3)",
      color: "rgb(255, 0, 0)"
    }
  };
  // todo: check if device supports required functions
  return { style: responseStyles.full };
}
