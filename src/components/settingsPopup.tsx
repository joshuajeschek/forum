import Image from "next/image";
import { FunctionComponent } from "react";
import Avatar from "../public/avatar.png";

interface SettingsPopupProps {
  setShow: (show: boolean) => void;
  show: boolean;
}

const SettingsPopup: FunctionComponent<SettingsPopupProps> = ({
  setShow,
  show,
}) => {
  // TODO: non full screen popup - what happens if user does not click on X but somewhere else?
  const handleClose = () => setShow(false);

  return (
    <>
      {show && (
        <div className="position-fixed top-0 start-0 bottom-0 end-0 overlay d-flex">
          <div className="bg-dark p-3 w-100 d-flex justify-content-center">
            <div className="d-flex flex-column mb-3 justify-content-center w-100">
              <button
                className="btn btn-primary mb-3 ms-auto"
                onClick={handleClose}
              >
                X
              </button>
              <Image
                src={Avatar}
                alt="profile picture"
                className="img-fluid w-25 mb-3 mx-auto"
              />
              <h4 className="text-light mb-3 mx-auto">Nutzername</h4>
              <button className="btn btn-primary mb-3 w-25 mx-auto">
                Einstellungen
              </button>
              <button className="btn btn-primary mb-3 w-25 mx-auto">
                Darkmode
              </button>
              <button className="btn btn-primary mb-3 w-25 mx-auto">
                Abmelden
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsPopup;
