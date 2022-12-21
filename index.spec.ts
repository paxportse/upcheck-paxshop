import "isomorphic-fetch"
import * as model from "@paxport/model-paxshop"
import * as dotenv from "dotenv"

dotenv.config()

describe("model.Client", () => {
	it("booking.fetch", async () => {
		const client = model.Client.create(
			process.env.apiUrl || "https://api.shop.paxport.group",
			"https://test.shop.paxport.group"
		)
		expect(await client.booking.fetch({ reference: "AAAA12", departure: "2022-01-13" })).toMatchSnapshot(
			"booking-AAAA12"
		)
	})
})
