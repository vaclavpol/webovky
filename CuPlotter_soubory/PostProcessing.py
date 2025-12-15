INPUT_FILE = "vstup.nc"
OUTPUT_FILE = "vystup.nc"

with open(INPUT_FILE, "r", encoding="utf-8") as f:
    data = f.read()

# Náhrady
data = data.replace("G01 Z-1.3062", "M3S50 G4P0.1")
data = data.replace("G01 Z-2.4000", "M3S50 G4P0.1")

data = data.replace("G00 Z2.0000", "M3S30 G4P0.1")
data = data.replace("F120", "F500")

# Odstranění příkazů
to_remove = ["G00 Z15.00", "M05", "M03"]

for item in to_remove:
    data = data.replace(item, "")
    
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.write(data)

print("Změny provedeny! Upravený soubor je uložen jako", OUTPUT_FILE)
input("\nStiskněte enter pro zavření okna...")
