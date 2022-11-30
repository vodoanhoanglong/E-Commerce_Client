import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "~/app/firebaseConfig";
import { useAppSelector } from "~/redux/hooks";
export default function useImageUploader() {
  const user = useAppSelector((state) => state.auth.data);

  const uploader = (file: any, callback: (url: string) => void) => {
    const storageRef = ref(storage, `${user?.email}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
          default:
            console.log("Nothing at all");
            break;
        }
      },
      (error) => {
        throw error;
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          callback(downloadUrl);
        });
      },
    );
  };

  const deleteFile = (file: any, callback: () => void) => {
    const storageRef = ref(storage, `${user?.email}/${file.name}`);
    deleteObject(storageRef)
      .then(() => {
        callback();
      })
      .catch((error) => {
        throw error;
      });
  };

  return {
    uploader,
    deleteFile,
  };
}
