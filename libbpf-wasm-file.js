// source: https://github.com/eunomia-bpf/wasm-bpf-guest-sdk-c/tree/5b45d54a1204709843d4a64e08455bf8cc38e68e
// file: libbpf-wasm.h
export const libbpfWasmHeaderStr = `I2lmbmRlZiBfTElCQlBGX1dBU01fSAojZGVmaW5lIF9MSUJCUEZfV0FTTV9ICgojaW5jbHVkZSA8
YXNzZXJ0Lmg+CiNpbmNsdWRlIDxlcnJuby5oPgojaW5jbHVkZSA8c3RkaW50Lmg+CiNpbmNsdWRl
IDxzdGRpby5oPgojaW5jbHVkZSA8c3RkbGliLmg+CiNpbmNsdWRlIDxzdHJpbmcuaD4KCiNkZWZp
bmUgUE9MTF9USU1FT1VUX01TIDEwMAojZGVmaW5lIElNUE9SVF9NT0RVTEUgIndhc21fYnBmIgoj
ZGVmaW5lIEFUVFIobmFtZSkgXAogICAgX19hdHRyaWJ1dGVfXygoaW1wb3J0X21vZHVsZShJTVBP
UlRfTU9EVUxFKSwgaW1wb3J0X25hbWUobmFtZSkpKQovLy8gc2hvdWxkIGJlIGV4dGVybnJlZiB0
eXBlIGZvciBicGZfb2JqZWN0X3NrZWwuCnR5cGVkZWYgdWludDY0X3QgYnBmX29iamVjdF9za2Vs
OwovLy8gbG9va3VwIGEgYnBmIG1hcCBmZCBieSBuYW1lLgpBVFRSKCJ3YXNtX2JwZl9tYXBfZmRf
YnlfbmFtZSIpCmludCB3YXNtX2JwZl9tYXBfZmRfYnlfbmFtZShicGZfb2JqZWN0X3NrZWwgb2Jq
LCBjb25zdCBjaGFyKiBuYW1lKTsKLy8vIGRldGFjaCBhbmQgY2xvc2UgYSBicGYgcHJvZ3JhbS4K
QVRUUigid2FzbV9jbG9zZV9icGZfb2JqZWN0IikKaW50IHdhc21fY2xvc2VfYnBmX29iamVjdChi
cGZfb2JqZWN0X3NrZWwgb2JqKTsKLy8vIENPLVJFIGxvYWQgYSBicGYgb2JqZWN0IGludG8gdGhl
IGtlcm5lbC4KQVRUUigid2FzbV9sb2FkX2JwZl9vYmplY3QiKQpicGZfb2JqZWN0X3NrZWwgd2Fz
bV9sb2FkX2JwZl9vYmplY3QoY29uc3Qgdm9pZCogb2JqX2J1ZiwgaW50IG9ial9idWZfc3opOwov
Ly8gYXR0YWNoIGEgYnBmIHByb2dyYW0gdG8gYSBrZXJuZWwgaG9vay4KQVRUUigid2FzbV9hdHRh
Y2hfYnBmX3Byb2dyYW0iKQppbnQgd2FzbV9hdHRhY2hfYnBmX3Byb2dyYW0oYnBmX29iamVjdF9z
a2VsIG9iaiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXIqIG5hbWUsCiAg
ICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFyKiBhdHRhY2hfdGFyZ2V0KTsKLy8v
IHBvbGwgYSBicGYgYnVmZmVyLCBhbmQgY2FsbCBhIHdhc20gY2FsbGJhY2sgaW5kaWNhdGVkIGJ5
IHNhbXBsZV9mdW5jLgovLy8gdGhlIGZpcnN0IHRpbWUgdG8gY2FsbCB0aGlzIGZ1bmN0aW9uIHdp
bGwgb3BlbiBhbmQgY3JlYXRlIGEgYnBmIGJ1ZmZlci4KQVRUUigid2FzbV9icGZfYnVmZmVyX3Bv
bGwiKQppbnQgd2FzbV9icGZfYnVmZmVyX3BvbGwoYnBmX29iamVjdF9za2VsIHByb2dyYW0sCiAg
ICAgICAgICAgICAgICAgICAgICAgICBpbnQgZmQsCiAgICAgICAgICAgICAgICAgICAgICAgICBp
bnQzMl90IHNhbXBsZV9mdW5jLAogICAgICAgICAgICAgICAgICAgICAgICAgdWludDMyX3QgY3R4
LAogICAgICAgICAgICAgICAgICAgICAgICAgY2hhciogZGF0YSwKICAgICAgICAgICAgICAgICAg
ICAgICAgIGludCBtYXhfc2l6ZSwKICAgICAgICAgICAgICAgICAgICAgICAgIGludCB0aW1lb3V0
X21zKTsKLy8vIGxvb2t1cCwgdXBkYXRlLCBkZWxldGUsIGFuZCBnZXRfbmV4dF9rZXkgb3BlcmF0
aW9ucyBvbiBhIGJwZiBtYXAuCkFUVFIoIndhc21fYnBmX21hcF9vcGVyYXRlIikKaW50IHdhc21f
YnBmX21hcF9vcGVyYXRlKGludCBmZCwKICAgICAgICAgICAgICAgICAgICAgICAgIGludCBjbWQs
CiAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkKiBrZXksCiAgICAgICAgICAgICAgICAgICAg
ICAgICB2b2lkKiB2YWx1ZSwKICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQqIG5leHRfa2V5
LAogICAgICAgICAgICAgICAgICAgICAgICAgdWludDY0X3QgZmxhZ3MpOwojdW5kZWYgSU1QT1JU
X01PRFVMRQojdW5kZWYgQVRUUgpzdHJ1Y3QgYnBmX21hcCB7CiAgICBicGZfb2JqZWN0X3NrZWwg
b2JqX3B0cjsKICAgIGNoYXIgbmFtZVs2NF07Cn07CgpzdHJ1Y3QgYnBmX3Byb2dyYW0gewogICAg
YnBmX29iamVjdF9za2VsIG9ial9wdHI7CiAgICBjaGFyIG5hbWVbNjRdOwogICAgY2hhciBhdHRh
Y2hfdGFyZ2V0WzEyOF07CiAgICBib29sIGF1dG9hdHRhY2g7Cn07CgpzdHJ1Y3QgYnBmX21hcF9z
a2VsZXRvbiB7CiAgICBjb25zdCBjaGFyKiBuYW1lOwogICAgc3RydWN0IGJwZl9tYXAqKiBtYXA7
CiAgICB2b2lkKiogbW1hcGVkOwp9OwoKc3RydWN0IGJwZl9wcm9nX3NrZWxldG9uIHsKICAgIGNv
bnN0IGNoYXIqIG5hbWU7CiAgICBzdHJ1Y3QgYnBmX3Byb2dyYW0qKiBwcm9nOwp9OwoKc3RydWN0
IGJwZl9vYmplY3Rfc2tlbGV0b24gewogICAgc2l6ZV90IHN6OyAvKiBzaXplIG9mIHRoaXMgc3Ry
dWN0LCBmb3IgZm9yd2FyZC9iYWNrd2FyZCBjb21wYXRpYmlsaXR5ICovCiAgICBjb25zdCBjaGFy
KiBuYW1lOwogICAgdm9pZCogZGF0YTsKICAgIHNpemVfdCBkYXRhX3N6OwogICAgc2l6ZV90IHJv
ZGF0YV9vZmZzZXQ7IC8qIG9mZnNldCBvZiByb2RhdGEgc2VjdGlvbiAqLwogICAgc2l6ZV90IGJz
c19vZmZzZXQ7ICAgIC8qIG9mZnNldCBvZiBic3Mgc2VjdGlvbiAqLwoKICAgIGJwZl9vYmplY3Rf
c2tlbCBvYmo7CgogICAgaW50IG1hcF9jbnQ7CiAgICBpbnQgbWFwX3NrZWxfc3o7IC8qIHNpemVv
ZihzdHJ1Y3QgYnBmX21hcF9za2VsZXRvbikgKi8KICAgIHN0cnVjdCBicGZfbWFwX3NrZWxldG9u
KiBtYXBzOwoKICAgIGludCBwcm9nX2NudDsKICAgIGludCBwcm9nX3NrZWxfc3o7IC8qIHNpemVv
ZihzdHJ1Y3QgYnBmX3Byb2dfc2tlbGV0b24pICovCiAgICBzdHJ1Y3QgYnBmX3Byb2dfc2tlbGV0
b24qIHByb2dzOwp9OwoKLyoKICAgIHNldCB0aGUgYnBmIHByb2cgYXR0YWNoIHRhcmdldCwgZm9y
IGV4YW1wbGU6CiAgICAgICAgc29ja29wcyBuZWVkIHRvIHNldCBhdHRhY2ggY2dyb3VwCiAgICAg
ICAgc29ja2ZpbHRlciBuZWVkIHRvIHNldCBhdHRhY2ggbmljCiAgICAgICAgLi4uCgogICAgcnVu
dGltZSB3aWxsIGFjY29yZGluZyB0byB0aGUgc2VjdGlvbiBuYW1lIHRvIGF0dGFjaCB0aGUgY29y
cmVzcG9uZCB0YXJnZXQKKi8Kc3RhdGljIHZvaWQgYnBmX3NldF9wcm9nX2F0dGFjaF90YXJnZXQo
c3RydWN0IGJwZl9wcm9ncmFtKiBwcm9nLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICBjaGFyKiBhdHRhY2hfdGFyZ2V0KSB7CiAgICBzdHJuY3B5KHByb2ctPmF0dGFjaF90
YXJnZXQsIGF0dGFjaF90YXJnZXQsIHNpemVvZihwcm9nLT5hdHRhY2hfdGFyZ2V0KSk7Cn0KCi8q
IGhhbmRsZSBlcnJuby1iYXNlZCAoZS5nLiwgc3lzY2FsbCBvciBsaWJjKSBlcnJvcnMgYWNjb3Jk
aW5nIHRvIGxpYmJwZidzCiAqIHN0cmljdCBtb2RlIHNldHRpbmdzCiAqLwpzdGF0aWMgaW5saW5l
IGludCBsaWJicGZfZXJyX2Vycm5vKGludCByZXQpIHsKICAgIC8qIGVycm5vIGlzIGFscmVhZHkg
YXNzdW1lZCB0byBiZSBzZXQgb24gZXJyb3IgKi8KICAgIHJldHVybiByZXQgPCAwID8gLWVycm5v
IDogcmV0Owp9CgpzdGF0aWMgaW50IGJwZl9tYXBfX2ZkKGNvbnN0IHN0cnVjdCBicGZfbWFwKiBt
YXApIHsKICAgIHJldHVybiB3YXNtX2JwZl9tYXBfZmRfYnlfbmFtZShtYXAtPm9ial9wdHIsIG1h
cC0+bmFtZSk7Cn0KCnN0YXRpYyBib29sIHN0cl9oYXNfc3VyZml4KGNvbnN0IGNoYXIqIHN0ciwg
Y29uc3QgY2hhciogc3VyZml4KSB7CiAgICBzaXplX3Qgc3RyX2xlbiA9IHN0cmxlbihzdHIpOwog
ICAgc2l6ZV90IHN1cmZpeF9sZW4gPSBzdHJsZW4oc3VyZml4KTsKICAgIGlmIChzdHJfbGVuIDwg
c3VyZml4X2xlbikKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICByZXR1cm4gc3RyY21wKHN0ciAr
IHN0cl9sZW4gLSBzdXJmaXhfbGVuLCBzdXJmaXgpID09IDA7Cn0KCnN0cnVjdCBicGZfb2JqZWN0
X29wZW5fb3B0czsKc3RhdGljIGludCBicGZfb2JqZWN0X19vcGVuX3NrZWxldG9uKHN0cnVjdCBi
cGZfb2JqZWN0X3NrZWxldG9uKiBzLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgY29uc3Qgc3RydWN0IGJwZl9vYmplY3Rfb3Blbl9vcHRzKiBvcHRzKSB7CiAgICBwcmludGYo
IlxuIik7CiAgICBhc3NlcnQocyAmJiBzLT5kYXRhICYmIHMtPmRhdGFfc3opOwoKICAgIGZvciAo
aW50IGkgPSAwOyBpIDwgcy0+bWFwX2NudDsgaSsrKSB7CiAgICAgICAgc3RydWN0IGJwZl9tYXBf
c2tlbGV0b24qIG1hcF9za2VsID0gKHZvaWQqKXMtPm1hcHMgKyBpICogcy0+bWFwX3NrZWxfc3o7
CiAgICAgICAgKm1hcF9za2VsLT5tYXAgPSBjYWxsb2MoMSwgc2l6ZW9mKCoqbWFwX3NrZWwtPm1h
cCkpOwogICAgICAgIGlmICghKm1hcF9za2VsLT5tYXApCiAgICAgICAgICAgIHJldHVybiAtMTsK
ICAgICAgICBzdHJuY3B5KCgqbWFwX3NrZWwtPm1hcCktPm5hbWUsIG1hcF9za2VsLT5uYW1lLAog
ICAgICAgICAgICAgICAgc2l6ZW9mKCgqbWFwX3NrZWwtPm1hcCktPm5hbWUpKTsKICAgICAgICBp
ZiAoc3RyX2hhc19zdXJmaXgobWFwX3NrZWwtPm5hbWUsICJyb2RhdGEiKSAmJiBtYXBfc2tlbC0+
bW1hcGVkKSB7CiAgICAgICAgICAgIC8vIHNldCB0aGUgYWRkcmVzcyB0byBtbWFwZWQgcm9kYXRh
IHZhcmlhYmxlCiAgICAgICAgICAgICptYXBfc2tlbC0+bW1hcGVkID0gcy0+ZGF0YSArIHMtPnJv
ZGF0YV9vZmZzZXQ7CiAgICAgICAgfQogICAgICAgIC8vIGl0IHdpbGwgbm90IHdvcmsgZm9yIGJz
cywgYmVjYXVzZSBic3MgaXMgbm90IG1tYXBlZAogICAgICAgIC8vIGlmIChzdHJfaGFzX3N1cmZp
eChtYXBfc2tlbC0+bmFtZSwgImJzcyIpICYmIG1hcF9za2VsLT5tbWFwZWQpIHsKICAgICAgICAv
LyAgICAgKm1hcF9za2VsLT5tbWFwZWQgPSBzLT5kYXRhICsgcy0+YnNzX29mZnNldDsKICAgICAg
ICAvLyB9CiAgICB9CgogICAgZm9yIChpbnQgaSA9IDA7IGkgPCBzLT5wcm9nX2NudDsgaSsrKSB7
CiAgICAgICAgc3RydWN0IGJwZl9wcm9nX3NrZWxldG9uKiBwcm9nX3NrZWwgPQogICAgICAgICAg
ICAodm9pZCopcy0+cHJvZ3MgKyBpICogcy0+cHJvZ19za2VsX3N6OwogICAgICAgICpwcm9nX3Nr
ZWwtPnByb2cgPSBjYWxsb2MoMSwgc2l6ZW9mKCoqcHJvZ19za2VsLT5wcm9nKSk7CiAgICAgICAg
aWYgKCEqcHJvZ19za2VsLT5wcm9nKQogICAgICAgICAgICByZXR1cm4gLTE7CiAgICAgICAgc3Ry
bmNweSgoKnByb2dfc2tlbC0+cHJvZyktPm5hbWUsIHByb2dfc2tlbC0+bmFtZSwKICAgICAgICAg
ICAgICAgIHNpemVvZigoKnByb2dfc2tlbC0+cHJvZyktPm5hbWUpKTsKICAgIH0KCiAgICByZXR1
cm4gMDsKfQoKc3RhdGljIGludCBicGZfb2JqZWN0X19kZXRhY2hfc2tlbGV0b24oc3RydWN0IGJw
Zl9vYmplY3Rfc2tlbGV0b24qIHMpIHsKICAgIHJldHVybiAwOwp9CgpzdGF0aWMgaW50IGJwZl9v
YmplY3RfX2xvYWRfc2tlbGV0b24oc3RydWN0IGJwZl9vYmplY3Rfc2tlbGV0b24qIHMpIHsKICAg
IGFzc2VydChzICYmIHMtPmRhdGEgJiYgcy0+ZGF0YV9zeik7CiAgICBzLT5vYmogPSB3YXNtX2xv
YWRfYnBmX29iamVjdChzLT5kYXRhLCBzLT5kYXRhX3N6KTsKICAgIGlmICghcy0+b2JqKQogICAg
ICAgIHJldHVybiAtMTsKCiAgICBmb3IgKGludCBpID0gMDsgaSA8IHMtPm1hcF9jbnQ7IGkrKykg
ewogICAgICAgIHN0cnVjdCBicGZfbWFwX3NrZWxldG9uKiBtYXBfc2tlbCA9ICh2b2lkKilzLT5t
YXBzICsgaSAqIHMtPm1hcF9za2VsX3N6OwogICAgICAgIGlmICghKm1hcF9za2VsLT5tYXApCiAg
ICAgICAgICAgIHJldHVybiAtMTsKICAgICAgICAoKm1hcF9za2VsLT5tYXApLT5vYmpfcHRyID0g
cy0+b2JqOwogICAgfQoKICAgIGZvciAoaW50IGkgPSAwOyBpIDwgcy0+cHJvZ19jbnQ7IGkrKykg
ewogICAgICAgIHN0cnVjdCBicGZfcHJvZ19za2VsZXRvbiogcHJvZ19za2VsID0KICAgICAgICAg
ICAgKHZvaWQqKXMtPnByb2dzICsgaSAqIHMtPnByb2dfc2tlbF9zejsKICAgICAgICBpZiAoISpw
cm9nX3NrZWwtPnByb2cpCiAgICAgICAgICAgIHJldHVybiAtMTsKICAgICAgICAoKnByb2dfc2tl
bC0+cHJvZyktPm9ial9wdHIgPSBzLT5vYmo7CiAgICB9CiAgICByZXR1cm4gMDsKfQoKc3RhdGlj
IGludCBicGZfb2JqZWN0X19hdHRhY2hfc2tlbGV0b24oc3RydWN0IGJwZl9vYmplY3Rfc2tlbGV0
b24qIHMpIHsKICAgIGFzc2VydChzICYmIHMtPmRhdGEgJiYgcy0+ZGF0YV9zeik7CiAgICBpbnQg
ZXJyOwogICAgZm9yIChpbnQgaSA9IDA7IGkgPCBzLT5wcm9nX2NudDsgaSsrKSB7CiAgICAgICAg
c3RydWN0IGJwZl9wcm9nX3NrZWxldG9uKiBwcm9nX3NrZWwgPQogICAgICAgICAgICAodm9pZCop
cy0+cHJvZ3MgKyBpICogcy0+cHJvZ19za2VsX3N6OwogICAgICAgIGlmIChwcm9nX3NrZWwtPnBy
b2cgJiYgKnByb2dfc2tlbC0+cHJvZykgewogICAgICAgICAgICBjb25zdCBjaGFyKiBhdHRhY2hf
dGFyZ2V0ID0gKCpwcm9nX3NrZWwtPnByb2cpLT5hdHRhY2hfdGFyZ2V0OwogICAgICAgICAgICBl
cnIgPSB3YXNtX2F0dGFjaF9icGZfcHJvZ3JhbSgKICAgICAgICAgICAgICAgIHMtPm9iaiwgKCpw
cm9nX3NrZWwtPnByb2cpLT5uYW1lLAogICAgICAgICAgICAgICAgKGF0dGFjaF90YXJnZXQgPT0g
TlVMTCB8fCBzdHJjbXAoYXR0YWNoX3RhcmdldCwgIiIpID09IDApCiAgICAgICAgICAgICAgICAg
ICAgPyBOVUxMCiAgICAgICAgICAgICAgICAgICAgOiBhdHRhY2hfdGFyZ2V0KTsKICAgICAgICAg
ICAgaWYgKGVyciA8IDApCiAgICAgICAgICAgICAgICByZXR1cm4gZXJyOwogICAgICAgIH0KICAg
IH0KICAgIHJldHVybiAwOwp9CgpzdGF0aWMgdm9pZCBicGZfb2JqZWN0X19kZXN0cm95X3NrZWxl
dG9uKHN0cnVjdCBicGZfb2JqZWN0X3NrZWxldG9uKiBzKSB7CiAgICBpZiAoIXMpCiAgICAgICAg
cmV0dXJuOwoKICAgIGlmIChzLT5vYmopCiAgICAgICAgd2FzbV9jbG9zZV9icGZfb2JqZWN0KHMt
Pm9iaik7CiAgICBmcmVlKHMtPm1hcHMpOwogICAgZnJlZShzLT5wcm9ncyk7CiAgICBmcmVlKHMp
Owp9Cgp0eXBlZGVmIGludCAoKmJwZl9idWZmZXJfc2FtcGxlX2ZuKSh2b2lkKiBjdHgsIHZvaWQq
IGRhdGEsIHNpemVfdCBzaXplKTsKCnN0cnVjdCBicGZfYnVmZmVyIHsKICAgIHN0cnVjdCBicGZf
bWFwKiBldmVudHM7CiAgICBpbnQgZmQ7CiAgICB2b2lkKiBjdHg7CiAgICBicGZfYnVmZmVyX3Nh
bXBsZV9mbiBzYW1wbGVfZm47Cn07CgpzdGF0aWMgc3RydWN0IGJwZl9idWZmZXIqIGJwZl9idWZm
ZXJfX25ldyhzdHJ1Y3QgYnBmX21hcCogZXZlbnRzKSB7CiAgICBzdHJ1Y3QgYnBmX2J1ZmZlciog
YnVmZmVyID0gY2FsbG9jKDEsIHNpemVvZigqYnVmZmVyKSk7CiAgICBpZiAoIWJ1ZmZlcikKICAg
ICAgICByZXR1cm4gTlVMTDsKICAgIGJ1ZmZlci0+ZXZlbnRzID0gZXZlbnRzOwogICAgcmV0dXJu
IGJ1ZmZlcjsKfQoKc3RhdGljIHN0cnVjdCBicGZfYnVmZmVyKiBicGZfYnVmZmVyX19vcGVuKHN0
cnVjdCBicGZfbWFwKiBldmVudHMsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICBicGZfYnVmZmVyX3NhbXBsZV9mbiBzYW1wbGVfY2IsCiAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkKiBjdHgpIHsKICAgIHN0cnVjdCBicGZfYnVm
ZmVyKiBidWZmZXIgPSBjYWxsb2MoMSwgc2l6ZW9mKCpidWZmZXIpKTsKICAgIGlmICghYnVmZmVy
KQogICAgICAgIHJldHVybiBOVUxMOwogICAgYnVmZmVyLT5ldmVudHMgPSBldmVudHM7CiAgICBi
dWZmZXItPmN0eCA9IGN0eDsKICAgIGJ1ZmZlci0+ZmQgPSBicGZfbWFwX19mZChidWZmZXItPmV2
ZW50cyk7CiAgICBidWZmZXItPnNhbXBsZV9mbiA9IHNhbXBsZV9jYjsKICAgIHJldHVybiBidWZm
ZXI7Cn0KCnN0YXRpYyBpbnQgYnBmX2J1ZmZlcl9fcG9sbChzdHJ1Y3QgYnBmX2J1ZmZlciogYnVm
ZmVyLCBpbnQgdGltZW91dF9tcykgewogICAgYXNzZXJ0KGJ1ZmZlciAmJiBidWZmZXItPmV2ZW50
cyAmJiBidWZmZXItPnNhbXBsZV9mbik7CiAgICBpZiAodGltZW91dF9tcyA8PSAwKQogICAgICAg
IHRpbWVvdXRfbXMgPSBQT0xMX1RJTUVPVVRfTVM7CiAgICBjaGFyIGV2ZW50X2J1ZmZlcls0MDk2
XTsKICAgIGludCByZXMgPSB3YXNtX2JwZl9idWZmZXJfcG9sbCgKICAgICAgICBidWZmZXItPmV2
ZW50cy0+b2JqX3B0ciwgYnVmZmVyLT5mZCwgKGludDMyX3QpYnVmZmVyLT5zYW1wbGVfZm4sCiAg
ICAgICAgKHVpbnQzMl90KWJ1ZmZlci0+Y3R4LCBldmVudF9idWZmZXIsIDQwOTYsIHRpbWVvdXRf
bXMpOwogICAgcmV0dXJuIHJlczsKfQoKc3RhdGljIHZvaWQgYnBmX2J1ZmZlcl9fZnJlZShzdHJ1
Y3QgYnBmX2J1ZmZlciogYnVmZmVyKSB7CiAgICBhc3NlcnQoYnVmZmVyKTsKICAgIGZyZWUoYnVm
ZmVyKTsKfQoKc3RhdGljIGludCBicGZfcHJvZ3JhbV9fc2V0X2F1dG9sb2FkKHN0cnVjdCBicGZf
cHJvZ3JhbSogcHJvZywgYm9vbCBhdXRvbG9hZCkgewogICAgLy8gVE9ETzogaW1wbGVtZW50CiAg
ICBwcm9nLT5hdXRvYXR0YWNoID0gYXV0b2xvYWQ7CiAgICByZXR1cm4gMDsKfQoKLyogZmxhZ3Mg
Zm9yIEJQRl9NQVBfVVBEQVRFX0VMRU0gY29tbWFuZCAqLwplbnVtIHsKICAgIEJQRl9BTlkgPSAw
LCAgICAgLyogY3JlYXRlIG5ldyBlbGVtZW50IG9yIHVwZGF0ZSBleGlzdGluZyAqLwogICAgQlBG
X05PRVhJU1QgPSAxLCAvKiBjcmVhdGUgbmV3IGVsZW1lbnQgaWYgaXQgZGlkbid0IGV4aXN0ICov
CiAgICBCUEZfRVhJU1QgPSAyLCAgIC8qIHVwZGF0ZSBleGlzdGluZyBlbGVtZW50ICovCiAgICBC
UEZfRl9MT0NLID0gNCwgIC8qIHNwaW5fbG9jay1lZCBtYXBfbG9va3VwL21hcF91cGRhdGUgKi8K
fTsKCi8vIE5vdGUgdGhhdCB3ZSBsaW1pdCB0aGUgdmFsaWQgYnBmX2NtZCB0byBtYXAgb3BlcmF0
aW9ucyBvbmx5LgplbnVtIGJwZl9jbWQgewogICAgLy8gQlBGX01BUF9DUkVBVEUsCiAgICBCUEZf
TUFQX0xPT0tVUF9FTEVNID0gMSwKICAgIEJQRl9NQVBfVVBEQVRFX0VMRU0sCiAgICBCUEZfTUFQ
X0RFTEVURV9FTEVNLAogICAgQlBGX01BUF9HRVRfTkVYVF9LRVksCiAgICAvLyBCUEZfUFJPR19M
T0FELAogICAgLy8gQlBGX09CSl9QSU4sCiAgICAvLyBCUEZfT0JKX0dFVCwKICAgIC8vIEJQRl9Q
Uk9HX0FUVEFDSCwKICAgIC8vIEJQRl9QUk9HX0RFVEFDSCwKICAgIC8vIEJQRl9QUk9HX1RFU1Rf
UlVOLAogICAgLy8gQlBGX1BST0dfUlVOID0gQlBGX1BST0dfVEVTVF9SVU4sCiAgICAvLyBCUEZf
UFJPR19HRVRfTkVYVF9JRCwKICAgIC8vIEJQRl9NQVBfR0VUX05FWFRfSUQsCiAgICAvLyBCUEZf
UFJPR19HRVRfRkRfQllfSUQsCiAgICAvLyBCUEZfTUFQX0dFVF9GRF9CWV9JRCwKICAgIC8vIEJQ
Rl9PQkpfR0VUX0lORk9fQllfRkQsCiAgICAvLyBCUEZfUFJPR19RVUVSWSwKICAgIC8vIEJQRl9S
QVdfVFJBQ0VQT0lOVF9PUEVOLAogICAgLy8gQlBGX0JURl9MT0FELAogICAgLy8gQlBGX0JURl9H
RVRfRkRfQllfSUQsCiAgICAvLyBCUEZfVEFTS19GRF9RVUVSWSwKICAgIC8vIEJQRl9NQVBfTE9P
S1VQX0FORF9ERUxFVEVfRUxFTSwKICAgIC8vIEJQRl9NQVBfRlJFRVpFLAogICAgLy8gQlBGX0JU
Rl9HRVRfTkVYVF9JRCwKICAgIC8vIEJQRl9NQVBfTE9PS1VQX0JBVENILAogICAgLy8gQlBGX01B
UF9MT09LVVBfQU5EX0RFTEVURV9CQVRDSCwKICAgIC8vIEJQRl9NQVBfVVBEQVRFX0JBVENILAog
ICAgLy8gQlBGX01BUF9ERUxFVEVfQkFUQ0gsCiAgICAvLyBCUEZfTElOS19DUkVBVEUsCiAgICAv
LyBCUEZfTElOS19VUERBVEUsCiAgICAvLyBCUEZfTElOS19HRVRfRkRfQllfSUQsCiAgICAvLyBC
UEZfTElOS19HRVRfTkVYVF9JRCwKICAgIC8vIEJQRl9FTkFCTEVfU1RBVFMsCiAgICAvLyBCUEZf
SVRFUl9DUkVBVEUsCiAgICAvLyBCUEZfTElOS19ERVRBQ0gsCiAgICAvLyBCUEZfUFJPR19CSU5E
X01BUCwKfTsKCmVudW0gYnBmX21hcF90eXBlIHsKICAgIEJQRl9NQVBfVFlQRV9VTlNQRUMsCiAg
ICBCUEZfTUFQX1RZUEVfSEFTSCwKICAgIEJQRl9NQVBfVFlQRV9BUlJBWSwKICAgIEJQRl9NQVBf
VFlQRV9QUk9HX0FSUkFZLAogICAgQlBGX01BUF9UWVBFX1BFUkZfRVZFTlRfQVJSQVksCiAgICBC
UEZfTUFQX1RZUEVfUEVSQ1BVX0hBU0gsCiAgICBCUEZfTUFQX1RZUEVfUEVSQ1BVX0FSUkFZLAog
ICAgQlBGX01BUF9UWVBFX1NUQUNLX1RSQUNFLAogICAgQlBGX01BUF9UWVBFX0NHUk9VUF9BUlJB
WSwKICAgIEJQRl9NQVBfVFlQRV9MUlVfSEFTSCwKICAgIEJQRl9NQVBfVFlQRV9MUlVfUEVSQ1BV
X0hBU0gsCiAgICBCUEZfTUFQX1RZUEVfTFBNX1RSSUUsCiAgICBCUEZfTUFQX1RZUEVfQVJSQVlf
T0ZfTUFQUywKICAgIEJQRl9NQVBfVFlQRV9IQVNIX09GX01BUFMsCiAgICBCUEZfTUFQX1RZUEVf
REVWTUFQLAogICAgQlBGX01BUF9UWVBFX1NPQ0tNQVAsCiAgICBCUEZfTUFQX1RZUEVfQ1BVTUFQ
LAogICAgQlBGX01BUF9UWVBFX1hTS01BUCwKICAgIEJQRl9NQVBfVFlQRV9TT0NLSEFTSCwKICAg
IEJQRl9NQVBfVFlQRV9DR1JPVVBfU1RPUkFHRV9ERVBSRUNBVEVELAogICAgLyogQlBGX01BUF9U
WVBFX0NHUk9VUF9TVE9SQUdFIGlzIGF2YWlsYWJsZSB0byBicGYgcHJvZ3JhbXMgYXR0YWNoaW5n
CiAgICAgKiB0byBhIGNncm91cC4gVGhlIG5ld2VyIEJQRl9NQVBfVFlQRV9DR1JQX1NUT1JBR0Ug
aXMgYXZhaWxhYmxlIHRvCiAgICAgKiBib3RoIGNncm91cC1hdHRhY2hlZCBhbmQgb3RoZXIgcHJv
Z3MgYW5kIHN1cHBvcnRzIGFsbCBmdW5jdGlvbmFsaXR5CiAgICAgKiBwcm92aWRlZCBieSBCUEZf
TUFQX1RZUEVfQ0dST1VQX1NUT1JBR0UuIFNvIG1hcmsKICAgICAqIEJQRl9NQVBfVFlQRV9DR1JP
VVBfU1RPUkFHRSBkZXByZWNhdGVkLgogICAgICovCiAgICBCUEZfTUFQX1RZUEVfQ0dST1VQX1NU
T1JBR0UgPSBCUEZfTUFQX1RZUEVfQ0dST1VQX1NUT1JBR0VfREVQUkVDQVRFRCwKICAgIEJQRl9N
QVBfVFlQRV9SRVVTRVBPUlRfU09DS0FSUkFZLAogICAgQlBGX01BUF9UWVBFX1BFUkNQVV9DR1JP
VVBfU1RPUkFHRSwKICAgIEJQRl9NQVBfVFlQRV9RVUVVRSwKICAgIEJQRl9NQVBfVFlQRV9TVEFD
SywKICAgIEJQRl9NQVBfVFlQRV9TS19TVE9SQUdFLAogICAgQlBGX01BUF9UWVBFX0RFVk1BUF9I
QVNILAogICAgQlBGX01BUF9UWVBFX1NUUlVDVF9PUFMsCiAgICBCUEZfTUFQX1RZUEVfUklOR0JV
RiwKICAgIEJQRl9NQVBfVFlQRV9JTk9ERV9TVE9SQUdFLAogICAgQlBGX01BUF9UWVBFX1RBU0tf
U1RPUkFHRSwKICAgIEJQRl9NQVBfVFlQRV9CTE9PTV9GSUxURVIsCiAgICBCUEZfTUFQX1RZUEVf
VVNFUl9SSU5HQlVGLAogICAgQlBGX01BUF9UWVBFX0NHUlBfU1RPUkFHRSwKfTsKCi8qIE5vdGUg
dGhhdCB0cmFjaW5nIHJlbGF0ZWQgcHJvZ3JhbXMgc3VjaCBhcwogKiBCUEZfUFJPR19UWVBFX3tL
UFJPQkUsVFJBQ0VQT0lOVCxQRVJGX0VWRU5ULFJBV19UUkFDRVBPSU5UfQogKiBhcmUgbm90IHN1
YmplY3QgdG8gYSBzdGFibGUgQVBJIHNpbmNlIGtlcm5lbCBpbnRlcm5hbCBkYXRhCiAqIHN0cnVj
dHVyZXMgY2FuIGNoYW5nZSBmcm9tIHJlbGVhc2UgdG8gcmVsZWFzZSBhbmQgbWF5CiAqIHRoZXJl
Zm9yZSBicmVhayBleGlzdGluZyB0cmFjaW5nIEJQRiBwcm9ncmFtcy4gVHJhY2luZyBCUEYKICog
cHJvZ3JhbXMgY29ycmVzcG9uZCB0byAvYS8gc3BlY2lmaWMga2VybmVsIHdoaWNoIGlzIHRvIGJl
CiAqIGFuYWx5emVkLCBhbmQgbm90IC9hLyBzcGVjaWZpYyBrZXJuZWwgL2FuZC8gYWxsIGZ1dHVy
ZSBvbmVzLgogKi8KZW51bSBicGZfcHJvZ190eXBlIHsKICAgIEJQRl9QUk9HX1RZUEVfVU5TUEVD
LAogICAgQlBGX1BST0dfVFlQRV9TT0NLRVRfRklMVEVSLAogICAgQlBGX1BST0dfVFlQRV9LUFJP
QkUsCiAgICBCUEZfUFJPR19UWVBFX1NDSEVEX0NMUywKICAgIEJQRl9QUk9HX1RZUEVfU0NIRURf
QUNULAogICAgQlBGX1BST0dfVFlQRV9UUkFDRVBPSU5ULAogICAgQlBGX1BST0dfVFlQRV9YRFAs
CiAgICBCUEZfUFJPR19UWVBFX1BFUkZfRVZFTlQsCiAgICBCUEZfUFJPR19UWVBFX0NHUk9VUF9T
S0IsCiAgICBCUEZfUFJPR19UWVBFX0NHUk9VUF9TT0NLLAogICAgQlBGX1BST0dfVFlQRV9MV1Rf
SU4sCiAgICBCUEZfUFJPR19UWVBFX0xXVF9PVVQsCiAgICBCUEZfUFJPR19UWVBFX0xXVF9YTUlU
LAogICAgQlBGX1BST0dfVFlQRV9TT0NLX09QUywKICAgIEJQRl9QUk9HX1RZUEVfU0tfU0tCLAog
ICAgQlBGX1BST0dfVFlQRV9DR1JPVVBfREVWSUNFLAogICAgQlBGX1BST0dfVFlQRV9TS19NU0cs
CiAgICBCUEZfUFJPR19UWVBFX1JBV19UUkFDRVBPSU5ULAogICAgQlBGX1BST0dfVFlQRV9DR1JP
VVBfU09DS19BRERSLAogICAgQlBGX1BST0dfVFlQRV9MV1RfU0VHNkxPQ0FMLAogICAgQlBGX1BS
T0dfVFlQRV9MSVJDX01PREUyLAogICAgQlBGX1BST0dfVFlQRV9TS19SRVVTRVBPUlQsCiAgICBC
UEZfUFJPR19UWVBFX0ZMT1dfRElTU0VDVE9SLAogICAgQlBGX1BST0dfVFlQRV9DR1JPVVBfU1lT
Q1RMLAogICAgQlBGX1BST0dfVFlQRV9SQVdfVFJBQ0VQT0lOVF9XUklUQUJMRSwKICAgIEJQRl9Q
Uk9HX1RZUEVfQ0dST1VQX1NPQ0tPUFQsCiAgICBCUEZfUFJPR19UWVBFX1RSQUNJTkcsCiAgICBC
UEZfUFJPR19UWVBFX1NUUlVDVF9PUFMsCiAgICBCUEZfUFJPR19UWVBFX0VYVCwKICAgIEJQRl9Q
Uk9HX1RZUEVfTFNNLAogICAgQlBGX1BST0dfVFlQRV9TS19MT09LVVAsCiAgICBCUEZfUFJPR19U
WVBFX1NZU0NBTEwsIC8qIGEgcHJvZ3JhbSB0aGF0IGNhbiBleGVjdXRlIHN5c2NhbGxzICovCn07
CgplbnVtIGJwZl9hdHRhY2hfdHlwZSB7CiAgICBCUEZfQ0dST1VQX0lORVRfSU5HUkVTUywKICAg
IEJQRl9DR1JPVVBfSU5FVF9FR1JFU1MsCiAgICBCUEZfQ0dST1VQX0lORVRfU09DS19DUkVBVEUs
CiAgICBCUEZfQ0dST1VQX1NPQ0tfT1BTLAogICAgQlBGX1NLX1NLQl9TVFJFQU1fUEFSU0VSLAog
ICAgQlBGX1NLX1NLQl9TVFJFQU1fVkVSRElDVCwKICAgIEJQRl9DR1JPVVBfREVWSUNFLAogICAg
QlBGX1NLX01TR19WRVJESUNULAogICAgQlBGX0NHUk9VUF9JTkVUNF9CSU5ELAogICAgQlBGX0NH
Uk9VUF9JTkVUNl9CSU5ELAogICAgQlBGX0NHUk9VUF9JTkVUNF9DT05ORUNULAogICAgQlBGX0NH
Uk9VUF9JTkVUNl9DT05ORUNULAogICAgQlBGX0NHUk9VUF9JTkVUNF9QT1NUX0JJTkQsCiAgICBC
UEZfQ0dST1VQX0lORVQ2X1BPU1RfQklORCwKICAgIEJQRl9DR1JPVVBfVURQNF9TRU5ETVNHLAog
ICAgQlBGX0NHUk9VUF9VRFA2X1NFTkRNU0csCiAgICBCUEZfTElSQ19NT0RFMiwKICAgIEJQRl9G
TE9XX0RJU1NFQ1RPUiwKICAgIEJQRl9DR1JPVVBfU1lTQ1RMLAogICAgQlBGX0NHUk9VUF9VRFA0
X1JFQ1ZNU0csCiAgICBCUEZfQ0dST1VQX1VEUDZfUkVDVk1TRywKICAgIEJQRl9DR1JPVVBfR0VU
U09DS09QVCwKICAgIEJQRl9DR1JPVVBfU0VUU09DS09QVCwKICAgIEJQRl9UUkFDRV9SQVdfVFAs
CiAgICBCUEZfVFJBQ0VfRkVOVFJZLAogICAgQlBGX1RSQUNFX0ZFWElULAogICAgQlBGX01PRElG
WV9SRVRVUk4sCiAgICBCUEZfTFNNX01BQywKICAgIEJQRl9UUkFDRV9JVEVSLAogICAgQlBGX0NH
Uk9VUF9JTkVUNF9HRVRQRUVSTkFNRSwKICAgIEJQRl9DR1JPVVBfSU5FVDZfR0VUUEVFUk5BTUUs
CiAgICBCUEZfQ0dST1VQX0lORVQ0X0dFVFNPQ0tOQU1FLAogICAgQlBGX0NHUk9VUF9JTkVUNl9H
RVRTT0NLTkFNRSwKICAgIEJQRl9YRFBfREVWTUFQLAogICAgQlBGX0NHUk9VUF9JTkVUX1NPQ0tf
UkVMRUFTRSwKICAgIEJQRl9YRFBfQ1BVTUFQLAogICAgQlBGX1NLX0xPT0tVUCwKICAgIEJQRl9Y
RFAsCiAgICBCUEZfU0tfU0tCX1ZFUkRJQ1QsCiAgICBCUEZfU0tfUkVVU0VQT1JUX1NFTEVDVCwK
ICAgIEJQRl9TS19SRVVTRVBPUlRfU0VMRUNUX09SX01JR1JBVEUsCiAgICBCUEZfUEVSRl9FVkVO
VCwKICAgIEJQRl9UUkFDRV9LUFJPQkVfTVVMVEksCiAgICBCUEZfTFNNX0NHUk9VUCwKICAgIF9f
TUFYX0JQRl9BVFRBQ0hfVFlQRQp9OwoKc3RhdGljIGludCBicGZfbWFwX3VwZGF0ZV9lbGVtKGlu
dCBmZCwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZvaWQqIGtleSwKICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZvaWQqIHZhbHVlLAogICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgdWludDY0X3QgZmxhZ3MpIHsKICAgIHJldHVybiB3YXNtX2Jw
Zl9tYXBfb3BlcmF0ZShmZCwgQlBGX01BUF9VUERBVEVfRUxFTSwgKHZvaWQqKWtleSwKICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAodm9pZCopdmFsdWUsIE5VTEwsIGZsYWdzKTsKfQoK
c3RhdGljIGludCBicGZfbWFwX2xvb2t1cF9lbGVtKGludCBmZCwgY29uc3Qgdm9pZCoga2V5LCB2
b2lkKiB2YWx1ZSkgewogICAgcmV0dXJuIHdhc21fYnBmX21hcF9vcGVyYXRlKGZkLCBCUEZfTUFQ
X0xPT0tVUF9FTEVNLCAodm9pZCopa2V5LCB2YWx1ZSwKICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICBOVUxMLCAwKTsKfQoKc3RhdGljIGludCBicGZfbWFwX2xvb2t1cF9lbGVtX2ZsYWdz
KGludCBmZCwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZvaWQq
IGtleSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQqIHZhbHVlLAog
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWludDY0X3QgZmxhZ3MpIHsKICAg
IHJldHVybiB3YXNtX2JwZl9tYXBfb3BlcmF0ZShmZCwgQlBGX01BUF9MT09LVVBfRUxFTSwgKHZv
aWQqKWtleSwgdmFsdWUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTlVMTCwgZmxh
Z3MpOwp9CgpzdGF0aWMgaW50IGJwZl9tYXBfZGVsZXRlX2VsZW0oaW50IGZkLCBjb25zdCB2b2lk
KiBrZXkpIHsKICAgIHJldHVybiB3YXNtX2JwZl9tYXBfb3BlcmF0ZShmZCwgQlBGX01BUF9ERUxF
VEVfRUxFTSwgKHZvaWQqKWtleSwgTlVMTCwgTlVMTCwKICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAwKTsKfQoKc3RhdGljIGludCBicGZfbWFwX2RlbGV0ZV9lbGVtX2ZsYWdzKGludCBm
ZCwgY29uc3Qgdm9pZCoga2V5LCB1aW50NjRfdCBmbGFncykgewogICAgcmV0dXJuIHdhc21fYnBm
X21hcF9vcGVyYXRlKGZkLCBCUEZfTUFQX0RFTEVURV9FTEVNLCAodm9pZCopa2V5LCBOVUxMLCBO
VUxMLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzKTsKfQoKc3RhdGljIGlu
dCBicGZfbWFwX2dldF9uZXh0X2tleShpbnQgZmQsIGNvbnN0IHZvaWQqIGtleSwgdm9pZCogbmV4
dF9rZXkpIHsKICAgIHJldHVybiB3YXNtX2JwZl9tYXBfb3BlcmF0ZShmZCwgQlBGX01BUF9HRVRf
TkVYVF9LRVksICh2b2lkKilrZXksIE5VTEwsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgbmV4dF9rZXksIDApOwp9CgojZW5kaWYgIC8vIF9MSUJCUEZfV0FTTV9ICg==`
  ;
