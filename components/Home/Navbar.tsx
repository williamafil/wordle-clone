import Container from "../Layout/Container";
import { ChartIcon, MenuIcon, QuestionIcon, SettingIcon } from "../Icons";

function Navbar() {
  return (
    <div className="border-b border-gray-300">
      <Container>
        <ul className="h-14 flex justify-between items-center">
          <li className="flex space-x-2">
            <MenuIcon />
            <QuestionIcon />
          </li>
          <li>
            <h1 className="text-xl font-extrabold">Wordle Clone</h1>
          </li>
          <li className="flex space-x-2">
            <ChartIcon />
            <SettingIcon />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
