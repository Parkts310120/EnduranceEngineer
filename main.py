import irsdk
import time

ir = irsdk.IRSDK()

print("Conectando ao iRacing...")

ir.startup()

while True:
    if ir.is_initialized:
        print(
            "LapDistPct:",
            ir["LapDistPct"],
            "Speed:",
            ir["Speed"],
            "Fuel:",
            ir["FuelLevel"]
        )
    else:
        print("Aguardando iRacing...")

    time.sleep(1)