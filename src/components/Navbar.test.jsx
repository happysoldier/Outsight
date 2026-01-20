import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { describe, it, expect } from 'vitest';

describe('Navbar Component', () => {
    it('renders the logo', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        const logo = screen.getByAltText(/Outsight/i);
        expect(logo).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(screen.getByText(/Hakkımızda/i)).toBeInTheDocument();
        expect(screen.getByText(/Hizmetler/i)).toBeInTheDocument();
        expect(screen.getByText(/Öngörüler/i)).toBeInTheDocument();
        expect(screen.getByText(/İletişim/i)).toBeInTheDocument();
    });
});
