function deletevalue() {
    document.kor.r.value = ""
    document.kor.K.value = ""
    document.kor.T.value = ""
}

function korfunction(m) {
    r = parseFloat(document.kor.r.value)
    K = parseFloat(document.kor.K.value)
    T = parseFloat(document.kor.T.value)

    if(m==1 && r>0) {
        K = 2*r*Math.PI
        T = r*r*Math.PI

        document.kor.K.value = Math.round(K*10)/10
        document.kor.T.value = Math.round(T*10)/10
    }

    else if(m==2 && K>0) {
        r = K/2/Math.PI
        T = r*r*Math.PI

        document.kor.r.value = Math.round(r*10)/10
        document.kor.T.value = Math.round(T*10)/10
    }

    else if(m==3 && T>0) {
        r = Math.sqrt(T/Math.PI)
        K = 2*r*Math.PI

        document.kor.r.value = Math.round(r*10)/10
        document.kor.K.value = Math.round(K*10)/10
    }
}