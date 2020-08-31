import bcrypt
import secrets

# salt = secrets.token_hex(16)
salt = "28127eecc04653a90d80226e629d2801"
print(f"salt : {salt}")

password = ("passjyfthgxfcgvhbword" + salt).encode("utf-8")


# hashed = bcrypt.hashpw(password, bcrypt.gensalt())
hashed = b'$2b$12$2t5EzFyVgEJ7YRZWFmrtbu4ag3vNTVQrP1gx5DhhazlrwP0BphKGi'


print(f"hashed : {hashed}")

if bcrypt.checkpw(password, hashed):
    print("It Matches!")
else:
    print("It Does not Match :(")

# print(hashed)
