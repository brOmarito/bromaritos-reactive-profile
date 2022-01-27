export function handleFieldError(setter, textId) {
    setter(false);
    document.getElementById(textId).classList.remove('hidden');
};

export function handleFieldSuccess(setter, textId) {
    setter(true);
    document.getElementById(textId).classList.add('hidden');
};

export function handleTextCheck(setter, value, textId) {
    if (value && value.length > 0) handleFieldSuccess(setter, textId);
    else handleFieldError(setter, textId);
};

export function handleEmailCheck(setter, email, textId) {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email && reg.test(String(email).toLowerCase())) handleFieldSuccess(setter, textId);
    else handleFieldError(setter, textId);
    return
}