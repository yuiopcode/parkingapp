import {IError} from "@/app/interfaces";
import {AxiosError} from "axios";

export default function handleError(e: unknown, customMessage?: string, ): IError {
    const error = e as AxiosError;

    return {message: customMessage || error.message, title: error.name};
}