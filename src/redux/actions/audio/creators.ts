import {
    ANNOUNCE_BEAT,
    CLEAR_EVENT_QUEUE,
    TOGGLE_PLAY,
    SET_AUDIO_ENGINE_READY,
    RESET_TRANSPORT,
    LISTEN_CELL_NOTE,
    IAnnounceBeatAction,
    IClearEventQueueAction,
    IListenCellNoteAction,
    IResetTransportAction,
    ISetAudioEngineReady,
    ITogglePlayAction
} from "./interfaces"

export function resetTransport(): IResetTransportAction {
    return { type: RESET_TRANSPORT }
}

export function togglePlay(): ITogglePlayAction {
    return { type: TOGGLE_PLAY }
}

export function announceBeat(beat: number): IAnnounceBeatAction {
    return {
        type: ANNOUNCE_BEAT,
        payload: { beat }
    }
}

export function clearEventQueue(): IClearEventQueueAction {
    return { type: CLEAR_EVENT_QUEUE }
}

export function setAudioEngineReady(): ISetAudioEngineReady {
    return {
        type: SET_AUDIO_ENGINE_READY
    }
}

export function listenCellNote(
    note: number,
    beat: number,
    trackID: string
): IListenCellNoteAction {
    return {
        type: LISTEN_CELL_NOTE,
        payload: { note, beat, trackID }
    }
}
