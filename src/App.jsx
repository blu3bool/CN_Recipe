import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { AppLayout } from './components/AppLayout';
import { ApiTestPage } from './pages/ApiTestPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';

import { SideDishPage } from './pages/SideDishPage';
import { NewRecipePage } from './pages/NewRecipePage';
import { EditRecipePage } from './pages/EditRecipePage';
import { FridgePage } from './pages/FridgePage';

export function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AppLayout>
          <Routes>
            <Route path="/" element={<RecipeListPage />} />
            <Route path="/recept/:slug" element={<RecipeDetailPage />} />
            <Route path="/api-test" element={<ApiTestPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/priloha" element={<SideDishPage />} />
            <Route path="/novy-recept" element={<NewRecipePage />} />
            <Route path="/recept/:slug/uprava" element={<EditRecipePage />} />
            <Route path="/chladnicka" element={<FridgePage />} />
          </Routes>
        </AppLayout>
      </ChakraProvider>
    </BrowserRouter>
  );
}
