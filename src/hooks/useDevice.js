import { useContext } from "react";
import { DeviceContext } from "../context/DeviceContext";

export default function useDevice() {

    return useContext(DeviceContext);

}