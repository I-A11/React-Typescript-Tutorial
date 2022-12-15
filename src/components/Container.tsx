type ContainerProp = { styles: React.CSSProperties };

const Container = ({ styles }: ContainerProp) => {
  return <div style={styles}>Text content here</div>;
};

export default Container;
