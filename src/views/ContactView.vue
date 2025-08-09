<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to start your adventure? Get in touch with our travel experts
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Interested Destination</label>
              <select
                v-model="form.destination"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              >
                <option value="">Select a destination</option>
                <option value="bali">Bali, Indonesia</option>
                <option value="europe">European Adventure</option>
                <option value="tokyo">Tokyo, Japan</option>
                <option value="himalaya">Himalayan Trek</option>
                <option value="safari">African Safari</option>
                <option value="greece">Greek Islands</option>
                <option value="custom">Custom Trip</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Travel Dates</label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  v-model="form.startDate"
                  type="date"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                />
                <input
                  v-model="form.endDate"
                  type="date"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
              <select
                v-model="form.travelers"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              >
                <option value="">Select number</option>
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3-4">3-4 people</option>
                <option value="5-8">5-8 people</option>
                <option value="9+">9+ people</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea
                v-model="form.message"
                required
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Tell us about your dream trip..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Contact Cards -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
            
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <i class="pi pi-phone text-primary-600"></i>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Phone</p>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <i class="pi pi-envelope text-primary-600"></i>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Email</p>
                  <p class="text-gray-600">info@wanderlust.com</p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <i class="pi pi-map-marker text-primary-600"></i>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Office</p>
                  <p class="text-gray-600">123 Travel Street<br>Adventure City, AC 12345</p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <i class="pi pi-clock text-primary-600"></i>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Hours</p>
                  <p class="text-gray-600">Mon - Fri: 9AM - 6PM<br>Sat: 10AM - 4PM</p>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ Section -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
            
            <div class="space-y-4">
              <div class="border-b border-gray-200 pb-4">
                <h4 class="font-medium text-gray-900 mb-2">How far in advance should I book?</h4>
                <p class="text-gray-600 text-sm">We recommend booking at least 3-6 months in advance for popular destinations to secure the best rates and availability.</p>
              </div>

              <div class="border-b border-gray-200 pb-4">
                <h4 class="font-medium text-gray-900 mb-2">What's included in the tour price?</h4>
                <p class="text-gray-600 text-sm">Each tour includes accommodation, meals as specified, professional guide, entrance fees, and transportation as outlined in the itinerary.</p>
              </div>

              <div class="border-b border-gray-200 pb-4">
                <h4 class="font-medium text-gray-900 mb-2">Do you offer custom tours?</h4>
                <p class="text-gray-600 text-sm">Yes! We can create personalized itineraries based on your preferences, budget, and travel dates.</p>
              </div>

              <div>
                <h4 class="font-medium text-gray-900 mb-2">What's your cancellation policy?</h4>
                <p class="text-gray-600 text-sm">Cancellations made 30+ days before departure receive full refund minus processing fee. Contact us for detailed policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  destination: '',
  startDate: '',
  endDate: '',
  travelers: '',
  message: ''
})

const submitForm = () => {
  // In a real application, this would send the form data to a server
  alert('Thank you for your message! We will get back to you soon.')
  
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    startDate: '',
    endDate: '',
    travelers: '',
    message: ''
  }
}
</script>