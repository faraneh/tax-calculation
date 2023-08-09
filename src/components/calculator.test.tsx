import * as React from 'react';
import Calculator from './calculator';
import { rest } from "msw"
import { setupServer } from "msw/node";
import { render, screen, waitFor } from '@testing-library/react';

const server = setupServer(
    rest.get(`http://localhost:5000/tax-calculator/tax-year/2022`, (req, res, ctx) => {
        return res(ctx.json({
                "tax_brackets":[
                    {
                        "max": 50197,
                        "min": 0,
                        "rate": 0.15
                    },
                    {
                        "max": 100392,
                        "min": 50197,
                        "rate": 0.205
                    },
                    {
                        "max": 155625,
                        "min": 100392,
                        "rate": 0.26
                    },
                    {
                        "max": 221708,
                        "min": 155625,
                        "rate": 0.29
                    },
                    {
                        "min": 221708,
                        "rate": 0.33
                    }
                ]
            }
        ))
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('Gets Data', async() => {
    render(<Calculator salary={0} year={2022} />);
    const out = await waitFor(() => screen.getByTestId("contentinfo").innerHTML, { timeout: 4000 });
    expect(out as any).toBe("$0.00");
})