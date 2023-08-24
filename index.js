const Box = props => {
  const {className,name}=props ;
  const containerClassName = `box-container  ${className}`

  return <div className={containerClassName}>
          <p className="name"{name}</p>
  </div>
}

const element = (
    <div>
      <h1>Boxes</h1>
      <Box className="sub-container" name=Small/>
      <Box className="sub-container" name=Medium/>
      <Box className="sub-container" name=Large/>
    </div>
)

ReactDOM.render(element, document.getElementById("root"));
