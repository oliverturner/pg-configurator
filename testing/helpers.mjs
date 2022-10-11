import test from "tape";
import { start, end } from "@architect/sandbox";

export const sandboxStart = () => {
	test("sandbox.start", async (t) => {
		t.plan(1);
		await start({ quiet: true });
		t.ok(true, "started");
	});
};

export const sandboxEnd = () => {
	test("sandbox.end", async (t) => {
		t.plan(1);
		await end();
		t.ok(true, "closed");
	});
};
