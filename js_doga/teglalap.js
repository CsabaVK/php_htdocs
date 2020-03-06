function teglafunction() {
    a = parseFloat(document.teglalap.a.value)
    b = parseFloat(document.teglalap.b.value)

    K = 2*(a+b)
    T = a*b

    document.teglalap.K.value = K
    document.teglalap.T.value = T
}
