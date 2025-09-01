import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '@/App';
import CaseStudyPage from './case-studies/CaseStudyPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
                <Route path="*" element={<div className="p-10 text-center text-red-500">404 - Page Not Found</div>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
