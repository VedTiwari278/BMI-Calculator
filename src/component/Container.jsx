import Logo from "./Logo";
import AppName from "./AppName";
import Input from "./Input";
function Container() {
  return (
    <> 
      
      <div className="Container">
        <Logo></Logo>
        <hr />
        <AppName></AppName>
        <hr />
        <Input></Input>
      </div>
    </>
  );
}

export default Container;
