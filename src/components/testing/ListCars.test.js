import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../NavBar";

describe(
    it(
        "Testing Navbar", ()=>{
            render(
                <Navbar></Navbar>
            );
            const linkElement = screen.getByText(/BCR/i);
            expect(linkElement).toBeInTheDocument();
        }
    )
)