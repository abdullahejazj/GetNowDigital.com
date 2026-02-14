
import React, { useState } from 'react';
import { getAIPlanner } from '../services/geminiService';
import { ConsultationResponse } from '../types';

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ConsultationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConsult = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const data = await getAIPlanner(input);
      setResult(data);
    } catch (err) {
      setError("Failed to generate plan. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultation" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-google-blue font-bold tracking-widest uppercase text-xs">Innovation Tool</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">AI-Powered Project Planner</h2>
          <p className="text-lg text-gray-600">Tell us about your business goals, and our AI consultant (trained on Nexus methodologies) will draft an initial roadmap for you in seconds.</p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-10 google-shadow mb-12">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Describe your project or business idea</label>
            <textarea
              className="w-full h-32 p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-google-blue focus:border-google-blue outline-none transition-all"
              placeholder="Example: I want to build a marketplace for local artisans that handles payments and shipping logistics..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button
            onClick={handleConsult}
            disabled={loading || !input.trim()}
            className={`w-full py-4 rounded-lg font-bold transition-all ${
              loading || !input.trim() 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-google-blue text-white hover:bg-google-blue-hover'
            }`}
          >
            {loading ? 'Analyzing with AI...' : 'Generate Roadmap'}
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-lg mb-8 text-center border border-red-100">
            {error}
          </div>
        )}

        {result && (
          <div className="animate-fadeIn space-y-8">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-google-blue mb-2">Executive Summary</h3>
              <p className="text-gray-700 leading-relaxed">{result.summary}</p>
              <div className="mt-4 inline-flex items-center px-3 py-1 bg-white border border-blue-200 rounded-full text-xs font-bold text-blue-800 uppercase">
                Complexity: {result.estimatedComplexity}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Recommended Roadmap</h3>
              {result.roadmap.map((step, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-gray-200 py-4">
                  <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-google-blue"></div>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <span className="text-xs font-bold text-google-blue uppercase">{step.phase}</span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.recommendedServices.map((service, sIdx) => (
                        <span key={sIdx} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-gray-500 mb-6 italic">This roadmap is an AI-generated baseline. Book a deep-dive call with our senior partners to refine it.</p>
              <button className="bg-google-blue text-white font-bold px-10 py-4 rounded-lg hover:shadow-xl transition-all">
                Book a Partner Review
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIConsultant;
